-- migrate:up
ALTER TABLE users ADD kakao_id INT NOT NULL AFTER id;

-- migrate:down
