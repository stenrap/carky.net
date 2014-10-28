package net.carky.controllers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/login")
public class LoginController {

    @RequestMapping(method = RequestMethod.GET)
    public ModelAndView getLogin(HttpServletRequest request, Model model) {
        CsrfToken csrfToken = (CsrfToken) request.getAttribute("_csrf");
        model.addAttribute("parameterName", csrfToken.getParameterName());
        model.addAttribute("token", csrfToken.getToken());
        return new ModelAndView("login", "csrfToken", model);
    }

    @RequestMapping(value = "error", method = RequestMethod.GET)
    public String loginError(RedirectAttributes redirectAttributes) {
        redirectAttributes.addFlashAttribute("error", true);
        return "redirect:/login";
    }

    /*
    @RequestMapping(value = "bcrypt", method = RequestMethod.GET)
    @ResponseBody
    public String getBcrypt(@RequestParam String rawPassword) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String encodedPassword = encoder.encode(rawPassword);
        String result = "The encoded password is: "+encodedPassword+" which matches 'password': "+encoder.matches("password", encodedPassword);
        return result;
    }
    */

}
