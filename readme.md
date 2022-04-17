# Create User

```http
POST /users
```

## request body

```javascript
{
  "name" : string
}
```

## responses

```javascript
{
  "id" : integer,
  "name" : string,
  "createdAt"    : date,
  "updatedAt"    : date
}
```

# View All Ticket

```http
GET /tickets
```

## responses

```javascript
[
  {
    id: integer,
    name: string,
    price: integer,
    createdAt: date,
    updatedAt: date,
  },
];
```

# Create Ticket

```http
POST /tickets
```

## request body

```javascript
{
  "name" : string,
  "price": integer
}
```

## responses

```javascript
{
  "id" : integer,
  "name" : string,
  "price" : integer,
  "createdAt"    : date,
  "updatedAt"    : date
}
```

# Create Order

```http
POST /orders
```

## request body

```javascript
{
  "userId" : integer,
  "tiketId": integer,
  "total":integer
}
```

## responses

```javascript
{
  "id" : integer,
  "userId" : integer,
  "tiketId": integer,
  "total":integer,
  "status":"pending",
  "createdAt"    : date,
  "updatedAt"    : date
}
```

# Pay Order

```http
POST /orders
```

## request params

```javascript
{
  "id" : integer
}
```

## responses

```javascript
{
  "id" : integer,
}
```


