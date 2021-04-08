package main

import (
	"errors"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

func main() {
	lambda.Start(HandleRequest)
}

func HandleRequest(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	if request.HTTPMethod == "GET" {
		var stringResponse string = "successful response sent here!!"
		apiRes := events.APIGatewayProxyResponse{Body: stringResponse, StatusCode: 200}
		return apiRes, nil
	} else {
		err := errors.New("Method Not Allowed!")
		responseMsg := "Method not permitted"
		apiRes := events.APIGatewayProxyResponse{Body: responseMsg, StatusCode: 502}
		return apiRes, err
	}
}
