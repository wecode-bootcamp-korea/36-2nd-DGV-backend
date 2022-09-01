-- migrate:up
ALTER TABLE users MODIFY kakao_id BIGINT NOT NULL;

-- migrate:down
