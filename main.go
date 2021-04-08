package main

import (
	"RyanFin/goShoppingApplication/handlers"
	"encoding/json"
	"errors"
	"fmt"
	"strconv"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

func main() {
	lambda.Start(HandleRequest)
}

func HandleRequest(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	if request.HTTPMethod == "GET" {

		// If there are no path parameters load all products
		if len(request.QueryStringParameters) == 0 {

			// Get all products
			lp := handlers.GetProducts()

			// Marshal data into JSON format
			jsonStr, err := json.Marshal(lp)
			if err != nil {
				fmt.Errorf("Unable to marshal JSON - %v", err.Error())
			}

			// push result
			apiRes := events.APIGatewayProxyResponse{Body: string(jsonStr), StatusCode: 200}
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

	} else {
		err := errors.New("Method Not Allowed!")
		responseMsg := "Method not permitted"
		apiRes := events.APIGatewayProxyResponse{Body: responseMsg, StatusCode: 502}
		return apiRes, err
	}
}
