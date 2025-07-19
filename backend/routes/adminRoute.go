package routes

import (
	"backend/controllers"
	"backend/middleware"

	"github.com/gin-gonic/gin"
)

func RegisterAdminRoutes(r *gin.Engine) {
	r.POST("/admin/login", controllers.AdminLogin)
	r.POST("/admin/register", controllers.AdminRegister)
	r.GET("/admin/profile", middleware.AuthMiddleware(), controllers.AdminProfile)
	r.PUT("/admin/profile", controllers.UpdateAdminProfile)
}
