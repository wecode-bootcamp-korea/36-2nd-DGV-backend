-- migrate:up
ALTER TABLE users MODIFY kakao_id BIGINT;

-- migrate:down
