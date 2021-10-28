package com.freecrm.runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.*;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = ".//Features/",
		glue= {"com.freecrm.stepDefination"},
		format= {"pretty","html:test-output","json:json_output/cucumber.json"},
		monochrome = true,
		dryRun = false
		)

public class TestRunner {

}
