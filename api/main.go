package main

import (
	"fmt"
	"net/http"
)

func main() {
	// Define a handler function for your API endpoint
	http.HandleFunc("/api/hello", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "Hello, Go API!\n")
	})

	// Start the HTTP server on port 8080
	fmt.Println("Server is running on http://localhost:8080")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		fmt.Println("Error:", err)
	}
}
