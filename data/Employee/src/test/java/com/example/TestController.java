package com.example;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

public class TestController extends TestApp {

	@Autowired
	private WebApplicationContext webApplicationContext;

	private MockMvc mockMvc;

	@Before
	public void setup() {
		mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
	}

	@Test
	public void testGetAll() throws Exception {
		mockMvc.perform(get("/api/employee")).andExpect(status().isOk())
				.andExpect(content().contentType("application/json"));

	}
	
	@Test
	public void testGetById() throws Exception {
		mockMvc.perform(get("/api/employee/3")).andExpect(status().isOk())
				.andExpect(content().contentType("application/json"));

	}

}
