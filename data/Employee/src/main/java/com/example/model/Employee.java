package com.example.model;
import java.io.Serializable;
import javax.persistence.Column;  
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;  
import javax.persistence.Table;

@Entity
@Table(name = "Employee")
public class  Employee implements Serializable {
private static final long serialVersionUID = -8809089768201955649L;
@Id
@Column(name = "ID")
@GeneratedValue(strategy=GenerationType.IDENTITY)
private Integer id;
@Column(name = "firstName")
private String firstName;
@Column(name = "phoneNo")
private String phoneNo;
@Column(name = "email")
private String email;
@Column(name = "lastName")
private String lastName;
@Column(name = "address")
private String address;
//public Employee(){}
//public Employee(Integer id, String firstName, String lastName ,String phoneNo, String email, String address) {
//super();
//this.id = id;
//this.firstName = firstName;
//this.phoneNo = phoneNo;
//this.email = email;
//this.lastName = lastName;
//this.address = address;
//}
public Integer getId() {
return id;
}
public void setId(Integer id) {
this.id = id;
}
public String getFirstName() {
return firstName;
}
public void setFirstName(String firstName) {
this.firstName = firstName;
}
public String getPhoneNo() {
return phoneNo;
}
public void setPhoneNo(String phoneNo) {
this.phoneNo = phoneNo;
}
public String getEmail() {
return email;
}
public void setEmail(String email) {
this.email = email;
}
public void setLastName(String lastName) {
this.lastName = lastName;
}
public String getLastName() {
return lastName;
}
public void setAddress(String address) {
this.address = address;
}
public String getAddress() {
return address;
}
}