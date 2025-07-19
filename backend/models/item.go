package models

type Item struct {
	ID       uint    `json:"id" gorm:"primaryKey"`
	Name     string  `json:"name"`
	Category string  `json:"category"`
	Price    float64 `json:"price"`
}
