-- migrate:up
CREATE TABLE movies (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    eng_title VARCHAR(50) NOT NULL,
    opening_date DATE NOT NULL,
    running_time TIME NOT NULL,
    genre VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    rating_week DECIMAL(2,1) NOT NULL,
    thumbnail_image_url VARCHAR(2083),
    PRIMARY KEY (id)
);

CREATE TABLE theaters (
    id INT NOT NULL AUTO_INCREMENT,
    location VARCHAR(20) NOT NULL,
    sub_location VARCHAR(20) NOT NULL,
    auditorium VARCHAR(20) NOT NULL,
    seats INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE movies_theaters (
    id INT NOT NULL AUTO_INCREMENT,
    movie_id INT NOT NULL,
    theater_id INT NOT NULL,
    start_time DATETIME NOT NULL,
    CONSTRAINT movies_theaters_movie_id_movies_id_fkey FOREIGN KEY (movie_id) REFERENCES movies(id) ON DELETE CASCADE,
    CONSTRAINT movies_theaters_theater_id_theaters_id_fkey FOREIGN KEY (theater_id) REFERENCES theaters(id) ON DELETE CASCADE,
    PRIMARY KEY (id)
);

CREATE TABLE images (
    id INT NOT NULL AUTO_INCREMENT,
    movie_id INT NOT NULL,
    image_url VARCHAR(2083),
    CONSTRAINT images_movie_id_movies_id_fkey FOREIGN KEY (movie_id) REFERENCES movies(id) ON DELETE CASCADE,
    PRIMARY KEY (id)
);

-- migrate:down
DROP TABLE movies
DROP TABLE theaters
DROP TABLE movies_theaters
DROP TABLE images