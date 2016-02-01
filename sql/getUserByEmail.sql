-- psql -d carky -a -f getUserByEmail.sql

CREATE OR REPLACE FUNCTION get_user_by_email(emailArg character varying(256))
RETURNS TABLE(id integer, password character varying(512), display_name character varying(256), code character (36)) AS
$$
BEGIN

    RETURN QUERY EXECUTE '
        SELECT id, password, display_name, code
        FROM users
        WHERE email = $1
    '
    USING emailArg;
    
END;
$$
LANGUAGE plpgsql;
