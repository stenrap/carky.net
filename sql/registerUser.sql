-- psql -d carky -a -f registerUser.sql

CREATE OR REPLACE FUNCTION register_user(emailArg       character varying(256),
                                         displayNameArg character varying(256),
                                         passwordArg    character varying(512),
                                         codeArg        character(36))
RETURNS void AS
$$
BEGIN

    EXECUTE '
        INSERT INTO users (email, display_name, password, code)
        VALUES ($1, $2, $3, $4)
    '
    USING emailArg, displayNameArg, passwordArg, codeArg;
    
END;
$$
LANGUAGE plpgsql;
