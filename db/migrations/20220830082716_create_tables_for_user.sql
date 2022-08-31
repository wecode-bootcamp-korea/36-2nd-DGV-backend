-- migrate:up
CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    kakao_id INT NOT NULL,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL,
    profie_image_url VARCHAR(2083),
    PRIMARY KEY (id)
);

CREATE TABLE reservation_status (
    id INT NOT NULL AUTO_INCREMENT,
    status VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE reservation (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    movies_theaters_id INT NOT NULL,
    reservation_status_id BIT DEFAULT NULL,
    person_number INT DEFAULT NULL,
    total_price DECIMAL(8,0) DEFAULT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT reservation_user_id_users_id_fkey FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT reservation_user_id_reservation_status_id_fkey FOREIGN KEY (user_id) REFERENCES reservation_status(id) ON DELETE CASCADE,
    PRIMARY KEY (id)
);

CREATE TABLE reviews (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    movie_id INT NOT NULL,
    rating DECIMAL(2,1) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

-- migrate:down
DROP TABLE users
DROP TABLE reservation_status
DROP TABLE reservation
DROP TABLE reviews