package routes

import (
	"backend/controllers"

	"github.com/gin-gonic/gin"
)

func RegisterItemRoutes(r *gin.Engine) {
	r.GET("/items", controllers.GetItems)
}
