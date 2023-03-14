#!/usr/bin/python
#
#  Copyright 2017 Otto Seiskari
#  Licensed under the Apache License, Version 2.0.
#  See http://www.apache.org/licenses/LICENSE-2.0 for the full text.
#
#  This file is based on
#  https://github.com/swagger-api/swagger-ui/blob/4f1772f6544699bc748299bd65f7ae2112777abc/dist/index.html
#  (Copyright 2017 SmartBear Software, Licensed under Apache 2.0)
#
"""
Usage:
    python swagger-yaml-to-html.py < /path/to/api.yaml > doc.html
"""
import yaml, json, sys, io

input_stream = io.TextIOWrapper(sys.stdin.buffer, encoding='utf-8')




CONTENT  = """
openapi: 3.0.0
info:
  title: Ass4HerbertAPI Swagger API
  description: |-
    This is the swagger page for Herbert's api for DS519 assignment 4
  version: 1.0.0
servers:
  - url: https://ds519ass4functions.azurewebsites.net/api
tags:
  - name: shippingItemGet
    description: Everything about ShippingItemsGet
  - name: shippingItemPost
    description: Everything about shippingItemPost

paths:
  /shippingItemGet:
    get:
      tags:
        - shippingItemGet
      summary: Finds shippingItems by ShipperID
      description: Returns all shipped item from the given ShipperID
      operationId: findShippingItemsByShipperID
      parameters:
        - name: code
          in: query
          description: 'authentication key'
          required: true
          schema:
            type: string
        - name: ShipperID
          in: query
          description: ShipperID that the shipped items was at
          required: true
          schema:
            type: string
            example: Zhang

          # explode: true
          # schema:
          #   type: string
          #   default: available
          #   enum:
          #     - available
          #     - pending
          #     - sold
      responses:
        '200':
          description: successful operation
          content:
            application/json:
              schema:
                type: array
                # items: string
                items:
                  $ref: '#/components/schemas/ShippingItems'          
            application/xml:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/ShippingItems'
        '404':
          description: no items found 
      # security:
      #   - code
  
  /shippingItemPost:
    post:
      tags:
        - shippingItemPost
      summary: Updates shippingItems by ShipperID
      description: Returns all shipped item from the given ShipperID
      operationId: postShippingItem
      parameters:
        - name: code
          in: query
          description: 'authentication key'
          required: true
          schema:
            type: string
        - name: ShipperID
          in: query
          description: ShipperID that the shipped items was at
          required: true
          schema:
            type: string
            example: Zhang

      responses:
        '200':
          description: successful operation
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/ShippingItems'          
            application/xml:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/ShippingItems'
        '404':
          description: Invalid input
      # security:
      #   - petstore_auth:
      #       - write:pets
      #       - read:pets
  
  /shippingItem:
    post:
      tags:
        - shippingItemPost
      summary: Updates shippingItems by ShipperID
      description: Returns all shipped item from the given ShipperID
      operationId: ShippingItemPost
      parameters:
        - name: code
          in: query
          description: 'authentication key'
          required: true
          schema:
            type: string
        - name: ShipperID
          in: query
          description: ShipperID that the shipped items was at
          required: true
          schema:
            type: string
            example: Zhang

      responses:
        '200':
          description: successful operation
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/ShippingItems'          
            application/xml:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/ShippingItems'
        '404':
          description: Invalid input
    get:
      tags:
        - shippingItemGet
      summary: Finds shippingItems by ShipperID
      description: Returns all shipped item from the given ShipperID
      operationId: ShippingItemGet
      parameters:
        - name: code
          in: query
          description: 'authentication key'
          required: true
          schema:
            type: string
        - name: ShipperID
          in: query
          description: ShipperID that the shipped items was at
          required: true
          schema:
            type: string
            example: Zhang

          # explode: true
          # schema:
          #   type: string
          #   default: available
          #   enum:
          #     - available
          #     - pending
          #     - sold
      responses:
        '200':
          description: successful operation
          content:
            application/json:
              schema:
                type: array
                # items: string
                items:
                  $ref: '#/components/schemas/ShippingItems'          
            application/xml:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/ShippingItems'
        '404':
          description: no items found 
    
# {
  # "Date": "Mar 12, 2023", 
# "ShipperID": "a908cef7-4c67-40f3-88f7-08a03ba4104a", 
# "ShippingPO": "81d06bd2-39e3-427c-9fb3-4e217b9a4d60", 
# "ShipmentID": "5", 
# "BoxesRcvd": "12", 
# "ShipperID": "Duan", 
# "id": "2e0c1eff-0e27-4b01-942a-963d459d46f0", 
# "_rid": "ldVkAP0fhCQGAAAAAAAAAA==", 
# "_self": "dbs/ldVkAA==/colls/ldVkAP0fhCQ=/docs/ldVkAP0fhCQGAAAAAAAAAA==/", 
# "_etag": "\\"7e007215-0000-0100-0000-640e84690000\\"", 
# "_attachments": "attachments/", 
# "_ts": 1678673001}

components:
  schemas:
    ShippingItems:
      type: object
      properties:
        id:
          type: string
          example: 10
        Date:
          type: string
          format: month date, year
          example: Mar 9, 2022
        WarehouseID:
          type: string
          example: a908cef7-4c67-40f3-88f7-08a03ba4104a
        ShippingPO:
          type: string
          example: 81d06bd2-39e3-427c-9fb3-4e217b9a4d60
        ShipmentID:
          type: string
          example: 5
        ShipperID:
          type: string
          example: Duan
        BoxesRcvd:
          type: string
          example: 12
        _rid:
          type: string
          example: ldVkAP0fhCQGAAAAAAAAAA==
        _self:
          type: string
          example: dbs/ldVkAA==/colls/ldVkAP0fhCQ=/docs/ldVkAP0fhCQGAAAAAAAAAA==/
        _etag:
          type: string
          example: \\"7e007215-0000-0100-0000-640e84690000\\"
        _attachments:
          type: string
          example: attachments/
        _ts:
          type: integer
          format: int64
          example: 1678673001

        # status:
        #   type: string
        #   description: Order Status
        #   example: approved
        #   enum:
        #     - placed
        #     - approved
        #     - delivered
      # xml:
      #   name: order
    
  # requestBodies:
  #   Pet:
  #     description: Pet object that needs to be added to the store
  #     content:
  #       application/json:
  #         schema:
  #           $ref: '#/components/schemas/Pet'
  #       application/xml:
  #         schema:
  #           $ref: '#/components/schemas/Pet'
  #   UserArray:
  #     description: List of user object
  #     content:
  #       application/json:
  #         schema:
  #           type: array
  #           items:
  #             $ref: '#/components/schemas/User'
  securitySchemes:
    code:
      type: apiKey
      name: AzureFunctionKey
      in: query



"""

file = "./Ass4HerbertAPI.yaml"
spec = yaml.load(CONTENT, Loader=yaml.FullLoader)
# print(json.dumps(spec))
# print(sys.stdin)

# content =  TEMPLATE % 
# sys.stdout.write(content)
spec = json.dumps(spec)




TEMPLATE = """
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Swagger UI</title>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Source+Code+Pro:300,600|Titillium+Web:400,600,700" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.24.2/swagger-ui.css" >
  <style>
    html
    {
      box-sizing: border-box;
      overflow: -moz-scrollbars-vertical;
      overflow-y: scroll;
    }
    *,
    *:before,
    *:after
    {
      box-sizing: inherit;
    }
    body {
      margin:0;
      background: #fafafa;
    }
  </style>
</head>
<body>
<div id="swagger-ui"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.24.2/swagger-ui-bundle.js"> </script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.24.2/swagger-ui-standalone-preset.js"> </script>
<script>
window.onload = function() {
  var spec = %s;
  // Build a system
  const ui = SwaggerUIBundle({
    spec: spec,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  })
  window.ui = ui
  
    var elements = document.getElementsByClassName("topbar");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}
</script>
</body>
</html>
"""


f = open("Ass4HerbertAPI.html",'w')
print(spec)
f.write(TEMPLATE % (spec))
f.close()