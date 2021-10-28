package com.freecrm.stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

@SuppressWarnings("deprecation")
public class LoginStepDefination {
		
	WebDriver driver;
	
	@Given("^User already on login page$")
	public void user_already_on_login_page()  {
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"//Drivers/chromedriver.exe");
	    driver=new ChromeDriver();
	    driver.get("https://classic.freecrm.com/index.html");
	    driver.manage().window().maximize();
	}

	
	
	@When("^Title of login page is free CRM$")
	public void title_of_login_page_is_free_CRM()  {
	 String title =  driver.getTitle();
	 System.out.println(title);
	  Assert.assertEquals("Free CRM - CRM software for customer relationship management, sales, and support.",title);
	}

	@Then("^User enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username, String password)  {
	    driver.findElement(By.name("username")).sendKeys(username);
	    driver.findElement(By.name("password")).sendKeys(password);
	    
	}

	@Then("^User clicks on login button$")
	public void user_clicks_on_login_button() {
	 
		WebElement loginbtn = driver.findElement(By.xpath("//input[@value='Login']"));
		JavascriptExecutor js= (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", loginbtn);
	}
	
	@Then("^User is on Home page$")
	public void user_is_on_home_page() {
		String title =  driver.getTitle();
		 System.out.println(title);
		  Assert.assertEquals("CRMPRO",title);
	}
	
	@Then("^Close the browser$")
	public void close_the_browser() {
		driver.quit();
	}

	
	
}
