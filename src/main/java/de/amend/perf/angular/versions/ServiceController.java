package de.amend.perf.angular.versions;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ServiceController {
	
	@RequestMapping(value = "/servicemock.json", method = RequestMethod.GET, produces = "application/json")
	public @ResponseBody Todos service() {
		try {
			Thread.sleep(800);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		Todos todos = new Todos();
		todos.addOriginPostfixInformationInTexts("_fromRESTService");
		return todos;
	}
}
