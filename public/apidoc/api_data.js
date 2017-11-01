define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/banner",
    "title": "Add a new banner",
    "description": "<p>Add a new banner</p>",
    "name": "addBanner",
    "group": "banners",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of post</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "minPrice",
            "description": "<p>Price</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "characteristic",
            "description": "<p>Simple description of the post</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "picUrl",
            "description": "<p>Image of the banner</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the banner</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "businness",
            "description": "<p>The category of the banner</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/v1/banners"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"code\":0,\n    \"data\":[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/banners/banner.controller.js",
    "groupTitle": "banners"
  },
  {
    "type": "get",
    "url": "/api/v1/banners",
    "title": "Get all banners",
    "description": "<p>Get all banners</p>",
    "name": "getAll",
    "group": "banners",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>The number of posts to return</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>The number of posts to skip</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/v1/banners"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"code\":0,\n \"data\":[{},{}]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/banners/banner.controller.js",
    "groupTitle": "banners"
  },
  {
    "type": "get",
    "url": "/ap1/v1/posts/:id",
    "title": "Get a Banner's information",
    "description": "<p>Get a Banners's information using the unique id</p>",
    "name": "getBanner",
    "group": "banners",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The unique ID</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/v1/banners/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/banners/banner.controller.js",
    "groupTitle": "banners"
  },
  {
    "type": "post",
    "url": "/api/v1/posts",
    "title": "Add a new post",
    "description": "<p>Add a new post</p>",
    "name": "addPost",
    "group": "posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of post</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Price</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Simple description of the post</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "pics",
            "description": "<p>Images of the product</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "tags",
            "description": "<p>Tags for the post used for search</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "categoryIndex",
            "description": "<p>The category of the post</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/v1/posts"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"code\":0,\n    \"data\":[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/posts/post.controller.js",
    "groupTitle": "posts"
  },
  {
    "type": "delete",
    "url": "/api/v1/posts",
    "title": "Delete a post",
    "description": "<p>Deletes a post of a given unique ID</p>",
    "name": "deletePost",
    "group": "posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The given post's ID</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/v1/posts/:postId"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\":0,\n   \"message\":\"successfully deleted post\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/posts/post.controller.js",
    "groupTitle": "posts"
  },
  {
    "type": "post",
    "url": "/api/v1/posts",
    "title": "Favorite a post",
    "description": "<p>Favorite a post of a given ID</p>",
    "name": "favoritePost",
    "group": "posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Id of the post</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/v1/posts/:postId/favoritePost"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"code\":0,\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/posts/post.controller.js",
    "groupTitle": "posts"
  },
  {
    "type": "get",
    "url": "/api/v1/posts",
    "title": "Get all posts",
    "description": "<p>Get all posts</p>",
    "name": "getAllPosts",
    "group": "posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>The number of posts to return</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>The number of posts to skip</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/v1/posts"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"code\":0,\n \"data\":[{},{}]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/posts/post.controller.js",
    "groupTitle": "posts"
  },
  {
    "type": "get",
    "url": "/ap1/v1/posts/:id",
    "title": "Get a User's information",
    "description": "<p>Get a User's information using the unique id</p>",
    "name": "getPost",
    "group": "posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The unique ID</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/v1/posts/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/posts/post.controller.js",
    "groupTitle": "posts"
  },
  {
    "type": "post",
    "url": "/api/v1/posts/category",
    "title": "",
    "description": "<p>Gets all posts with the given categoryIndex</p>",
    "name": "getPostByCategoryIndex",
    "group": "posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "categoryIndex",
            "description": "<p>The categoryIndex of the post</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/v1/posts/category?categoryIndex=2"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n      \"meta\": {\n      \t\"code\": 0,\n       \"data\":[{\n       {\n    \"code\": 0,\n    \"data\": [\n        {\n            \"_id\": \"597c37ca2da8751f28d6cf0e\",\n            \"title\": \"test-1235\",\n            \"user\": \"59676548fd839726e373285f\",\n            \"favoriteCount\": 0,\n            \"createdAt\": \"2017-07-29T07:22:50.506Z\",\n            \"tags\": [\n                \"nice\",\n                \"cheap\"\n            ],\n            \"pics\": [\n                \"first_pic_url\",\n                \"second_pic_url\"\n            ],\n            \"categoryIndex\": 2,\n            \"description\": \"awesome product\",\n            \"price\": 100,\n            \"__v\": 0\n        }\n    ]\n}},{}]\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/posts/post.controller.js",
    "groupTitle": "posts"
  },
  {
    "type": "post",
    "url": "/api/v1/posts/search",
    "title": "Search for posts with given keyword",
    "description": "<p>Returns all posts that match a given search keyword</p>",
    "name": "searchPost",
    "group": "posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>The search keyword</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/v1/posts/search"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\":0,\n   \"data\":[{},{}]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/posts/post.controller.js",
    "groupTitle": "posts"
  },
  {
    "type": "patch",
    "url": "/api/v1/posts",
    "title": "Updates a post",
    "description": "<p>Updates a post of given ID</p>",
    "name": "updatePost",
    "group": "posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of post</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Price</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Simple description of the post</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "pics",
            "description": "<p>Images of the product</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "tags",
            "description": "<p>Tags for the post used for search</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "categoryIndex",
            "description": "<p>The category of the post</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/v1/posts/:postId"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"code\":0,\n    \"data\":[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/posts/post.controller.js",
    "groupTitle": "posts"
  },
  {
    "type": "get",
    "url": "/api/v1/uptoken",
    "title": "Returns a token for qiniu upload",
    "description": "<p>Returns a auth token for upload of images to qiniu</p>",
    "name": "getUptoken",
    "group": "qiniu",
    "sampleRequest": [
      {
        "url": "/api/v1/uptoken"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"token\": \"oLlak7D-kakkak0D_CvN5ohOmUJd6LLkezs44\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/upload/qiniu.controller.js",
    "groupTitle": "qiniu"
  },
  {
    "type": "post",
    "url": "/api/v1/qrcode",
    "title": "Add a new wechat_Qrcode",
    "description": "<p>Add a new wechat_qrcode for a given user</p>",
    "name": "addQrcode",
    "group": "qrcode",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>The path to the qrcode image</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/v1/qrcode"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"code\":0,\n    \"data\":[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/qrcode/qrcode.controller.js",
    "groupTitle": "qrcode"
  },
  {
    "type": "delete",
    "url": "/api/v1/qrcode/:qrcodeIs",
    "title": "Deletes a wechat_Qrcode",
    "description": "<p>Delete a wechat_qrcode for a given user</p>",
    "name": "deleteQrcode",
    "group": "qrcode",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The unique ID of the given User's qrcode</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/v1/qrcode/:qrcodeId"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"code\":0,\n    \"message:\"sucessfully deleted qrcode\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/qrcode/qrcode.controller.js",
    "groupTitle": "qrcode"
  },
  {
    "type": "get",
    "url": "/api/v1/qrcode",
    "title": "Get all wechat_Qrcodes",
    "description": "<p>Get all wechat_Qrcodes of users</p>",
    "name": "getAllQrcode",
    "group": "qrcode",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>The number of qrcodes to return</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>The number of qrcodes to skip</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/v1/qrcode"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"code\":0,\n \"data\":[{},{}]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/qrcode/qrcode.controller.js",
    "groupTitle": "qrcode"
  },
  {
    "type": "get",
    "url": "/ap1/v1/qrcode/:qrcodeId",
    "title": "Get a User's Qrcode information",
    "description": "<p>Get a User's qrcode information using the unique id</p>",
    "name": "getQrcode",
    "group": "qrcode",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The unique ID</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/v1/qrcode/:qrcodeId"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/qrcode/qrcode.controller.js",
    "groupTitle": "qrcode"
  },
  {
    "type": "patch",
    "url": "/api/v1/qrcode",
    "title": "Updates a wechat_Qrcode",
    "description": "<p>Updates a wechat_qrcode for a given user</p>",
    "name": "updateQrcode",
    "group": "qrcode",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>The path to the qrcode image</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/v1/qrcode"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"code\":0,\n    \"data\":[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/qrcode/qrcode.controller.js",
    "groupTitle": "qrcode"
  },
  {
    "type": "post",
    "url": "/api/v1/suggestions",
    "title": "Add a new suggestion",
    "description": "<p>User can add a new suggestion to help improve the mini app</p>",
    "name": "addSuggestion",
    "group": "suggestions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>The content of the suggestion</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/v1/suggestions"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"code\":0,\n    \"data\":[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/suggestions/suggestion.controller.js",
    "groupTitle": "suggestions"
  },
  {
    "type": "get",
    "url": "/api/v1/users",
    "title": "Get all users",
    "description": "<p>Get all users</p>",
    "name": "getAllUsers",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>The number of posts to return</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>The number of posts to skip</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/v1/users"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"code\":0,\n \"data\":[{},{}]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/users/user.controller.js",
    "groupTitle": "users"
  },
  {
    "type": "post",
    "url": "/api/v1/users/auth",
    "title": "Registers a new wechat user using the code",
    "description": "<p>Register a new wechat user using the auth code and return a token</p>",
    "name": "getOpenid",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The unique code from wx.login()</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/v1/users/auth"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"token\": \"oLlak7D-kakkak0D_CvN5ohOmUJd6LLkezs44\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/users/user.controller.js",
    "groupTitle": "users"
  },
  {
    "type": "get",
    "url": "/ap1/v1/users/:userId",
    "title": "Get a User's information",
    "description": "<p>Get a User's information using the unique id</p>",
    "name": "getUser",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The unique ID</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/v1/users/:userId"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"code\":0,\ndata:[{}]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/users/user.controller.js",
    "groupTitle": "users"
  },
  {
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "Logs in  a new wechat user using the token",
    "description": "<p>Log in  a new wechat user using the auth token obtained from /api/v1/users/auth user must send wechat body with openid</p>",
    "name": "login",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The unique token from /api/v1/users/auth</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/v1/users/login"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"code\":0,\n         \"token\":\"oLlak7D-kakkak0D_CvN5ohOmUJd6LLkezs44\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/users/user.controller.js",
    "groupTitle": "users"
  }
] });
