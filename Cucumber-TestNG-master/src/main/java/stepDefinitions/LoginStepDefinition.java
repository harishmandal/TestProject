package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition {

	WebDriver driver;

	@Given("^user is already on borrowing calculator Page$")
	public void user_is_already_on_borrowing_calculator_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\DELL\\Downloads\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/");

	}

	@When("^title of borrowing calculator Page is ANZ Logo$")
	public void title_of_borrowing_calculator_page_is_anz_logo() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Home loan borrowing power calculator | ANZ", title);
	}

	@Then("^user click Application type as Single$")
	public void user_click_application_type_as_single() {
		driver.findElement(By.id("application_type_single")).click();
	}

	@Then("^user select number of dependants as zero$")
	public void user_select_number_of_dependants_as_zero() {
		WebElement NumberOfDepnd = driver.findElement(By.xpath(
				"//body/main[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/select[1]"));
		Select s1 = new Select(NumberOfDepnd);
		s1.selectByIndex(0);
	}
	@Then("^user click on property you would like to buy as home to live in$")
	public void user_click_on_property_you_would_like_to_buy_as_home_to_live_in() {
		driver.findElement(By.xpath("//body/main[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/ul[1]/li[1]/label[1]")).click();
	}

	@Then("^user enter Your income before tax \"([^\"]*)\"$")
	public void user_enter_your_income_before_tax_something(String incomebeforetax) {
		driver.findElement(By.xpath("(//input[@type='text'])[2]")).sendKeys(incomebeforetax);
	}

	@Then("^user enter Your other income  \"([^\"]*)\"$")
	public void user_enter_your_other_income_something(String otherincome) {
		driver.findElement(By.xpath("(//input[@type='text'])[3]")).sendKeys(otherincome);
	}

	@Then("^user enter Living expenses  \"([^\"]*)\"$")
	public void user_enter_living_expenses_something(String livingexpenses) {
		driver.findElement(By.xpath("//input[@id='expenses']")).sendKeys(livingexpenses);
	}

	@Then("^user enter current home loan repayments  \"([^\"]*)\"$")
	public void user_enter_current_home_loan_repayments_something(String currenthomeloan)
			 {
		driver.findElement(By.xpath("//input[@id='homeloans']")).sendKeys(currenthomeloan);
	}
	@Then("^user enter Other loan repayments \"([^\"]*)\"$")
    public void user_enter_other_loan_repayments_something(String otherloanrepayment)  {
		driver.findElement(By.xpath(" //input[@id='otherloans']")).sendKeys(otherloanrepayment);
    }
	@Then("^user enter Other commitments \"([^\"]*)\"$")
    public void user_enter_other_commitments_something(String othercommitments)  {
		driver.findElement(By.xpath("//body/main[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[4]/div[1]/input[1]")).sendKeys(othercommitments); 
    }
	
	@Then("^user enter Total credit card limits \"([^\"]*)\"$")
    public void user_enter_total_credit_card_limits_something(String totalcreditcardslimits)  {
		driver.findElement(By.xpath("//input[@id='credit']")).sendKeys(totalcreditcardslimits);
		
    }
	@Then("^user click on work out how much i could borrow button$")
    public void user_click_on_work_out_how_much_i_could_borrow_button() throws Exception  {
		Thread.sleep(2000);
		driver.findElement(By.xpath("//button[@id='btnBorrowCalculater']")).click();
    }
	
	@Then("^fetch the the estimate amount you could borrow$")
    public void fetch_the_the_estimate_amount_you_could_borrow() throws Throwable {
		String S1 =driver.findElement(By.xpath("//span[@id='borrowResultTextAmount']")).getText();
		Thread.sleep(2000);
		System.out.println(S1);
    }
	@Then("^user click the start over button$")
    public void user_click_the_start_over_button() throws Exception  {
		Thread.sleep(3000);
        driver.findElement(By.xpath("//body/main[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[2]/button[1]")).click();
    }
	
	@Then("^user entering  the value only for Living expenses as \"([^\"]*)\"$")
    public void user_entering_the_value_only_for_living_expenses_as_something(String livingexpenses1)  {
		driver.findElement(By.xpath("//input[@id='expenses']")).sendKeys(livingexpenses1);
    }
	@Then("^user validate the actual error message withh expected as \"([^\"]*)\"$")
    public void user_validate_the_actual_error_message_withh_expected_as_something(String expectedmessage)  {
		String actualErrorMessage=driver.findElement(By.xpath("//body/main[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[3]/div[1]/span[1]")).getText();
		System.out.println(actualErrorMessage);
		Assert.assertEquals(actualErrorMessage, expectedmessage);
	}
	
	@Then("^Close the browser$")
	public void close_the_browser() {
		driver.quit();
	}

}
