package main

import (
	"RyanFin/goShoppingApplication/handlers"
	"encoding/json"
	"errors"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

func main() {
	lambda.Start(HandleRequest)
}

func HandleRequest(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	if request.HTTPMethod == "GET" {

		lp := handlers.GetProducts()
		j, _ := json.Marshal(lp)

		apiRes := events.APIGatewayProxyResponse{Body: string(j), StatusCode: 200}
		return apiRes, nil
	} else {
		err := errors.New("Method Not Allowed!")
		responseMsg := "Method not permitted"
		apiRes := events.APIGatewayProxyResponse{Body: responseMsg, StatusCode: 502}
		return apiRes, err
	}
}
