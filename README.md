
# MovieDude website

A website that the makes use of a Dtabase API to provide movie information including rating and popularity. it also make use of the API to make searches 


## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [TMDB](https://www.themoviedb.org/)


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | [get API key from TMDB](https://developer.themoviedb.org/docs) |

#### Get item

```http
  GET /api/items/${search}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `search`  | `string` | user search input |

#### search("the boys")

takes user input 

