package net.carky.controllers;

import net.carky.model.NameCheck;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/register")
public class RegisterController {

    private final Logger log = LoggerFactory.getLogger(RegisterController.class);

    @RequestMapping(value = "check-name", method = RequestMethod.POST)
    @ResponseBody
    public void checkName(NameCheck nameCheck) {
        log.debug("The name is: "+nameCheck.getName());
    }

}
