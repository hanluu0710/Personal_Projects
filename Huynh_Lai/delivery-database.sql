CREATE TABLE deliveries (
	id SERIAL PRIMARY KEY,
	customer_name TEXT,
	address TEXT,
	delivery_date DATE,
	product_size INTEGER,
	status TEXT DEFAULT 'pending'
);