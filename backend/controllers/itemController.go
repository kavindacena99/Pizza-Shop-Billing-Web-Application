package controllers

import (
	"net/http"

	"backend/database"
	"backend/models"

	"github.com/gin-gonic/gin"
)

func GetItems(c *gin.Context) {
	var items []models.Item
	database.DB.Find(&items)
	c.JSON(http.StatusOK, items)
}
