Schema

users
  - name
  - email
  - password
  - basket []
  - products []

- products
  - name
  - description
  - price
  - reviews []
  - genre_id
  - vendor_id
  - image_url

- genres
  - name
  - products []
  
- reviews
  - title
  - body
  - stars
  - author_id
  - product_id
  
