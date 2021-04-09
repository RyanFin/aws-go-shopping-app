package main

import (
	"RyanFin/goShoppingApplication/handlers"
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"strconv"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

func main() {
	lambda.Start(HandleRequest)
}

func HandleRequest(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	if request.HTTPMethod == http.MethodGet {

		// If there are no path parameters load all products
		if len(request.QueryStringParameters) == 0 {

			jsonStr := GetAllProducts()

			// set CORS headers
			headers := make(map[string]string)

			headers["Access-Control-Allow-Origin"] = "*"

			// push result
			apiRes := events.APIGatewayProxyResponse{Body: string(jsonStr), StatusCode: 200, Headers: headers}
			return apiRes, nil
		} else {
			// retrieve product ID from the URL params map: id -> 1
			prodID, err := strconv.Atoi(request.QueryStringParameters["id"])
			if err != nil {
				fmt.Errorf("Unable to convert product ID string to int - %v", err.Error())
			}
			// retrieve the specific product by ID
			p := handlers.GetProductByID(prodID)

			// Marshal data into JSON format
			prodStr, err := json.Marshal(p)
			if err != nil {
				fmt.Errorf("Unable to Marshal Product data - %v", err.Error())
			}
			// push result
			apiRes := events.APIGatewayProxyResponse{Body: string(prodStr), StatusCode: 200}
			return apiRes, nil
		}

	} else if request.HTTPMethod == http.MethodPost {
		newProdJsonStr := request.Body

		var newProduct *handlers.Product

		err := json.Unmarshal([]byte(newProdJsonStr), &newProduct)
		if err != nil {
			fmt.Errorf("Unable to Unmarshal product data into Product struct - %v", err.Error())
		}

		// Update the product id of the new item
		newProduct.ID = handlers.GetNextProductID()

		handlers.AddProduct(newProduct)
		s := strconv.Itoa(newProduct.ID)
		if err != nil {
			fmt.Errorf("Error converting int to string - %v", err.Error())
		}

		var resMsg string = "added product: " + s
		apiRes := events.APIGatewayProxyResponse{Body: resMsg, StatusCode: 200}
		return apiRes, nil

	} else {
		err := errors.New("Method Not Allowed!")
		responseMsg := "Method not permitted"
		apiRes := events.APIGatewayProxyResponse{Body: responseMsg, StatusCode: 502}
		return apiRes, err
	}
}

func GetAllProducts() string {
	// Get all products
	lp := handlers.GetProducts()

	// Marshal data into JSON format
	jsonStr, err := json.Marshal(lp)
	if err != nil {
		fmt.Errorf("Unable to marshal JSON - %v", err.Error())
	}
	return string(jsonStr)
}
