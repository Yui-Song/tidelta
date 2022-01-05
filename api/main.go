package main

import (
	"github.com/gin-gonic/gin"
)


func main() {
	r := gin.Default()
	r.GET("/api/diff", DiffReport)

	r.Run()
}
