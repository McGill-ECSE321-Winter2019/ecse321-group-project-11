package ca.mcgill.ecse321.cooperator.dto;

import java.util.ArrayList;

import ca.mcgill.ecse321.cooperator.model.Faculty;

public class StudentDto {

	private long phone;
	private String firstName;
	private String lastName;
	private String email;
	private int userId;

	private long id;
	private String academicYear;
	private String major;
	private String minor;
	private AdministratorDto administrator;
	private Faculty faculty;
	private ArrayList<Integer> coop;

	public StudentDto() {

	}

	public StudentDto(long phone, String firstName, String lastName, String email, int userId, long id, String academicYear,
			String major, String minor, AdministratorDto administrator, Faculty faculty, ArrayList<Integer> coop) {
		this.phone = phone;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.userId = userId;
		this.id = id;
		this.academicYear = academicYear;
		this.major = major;
		this.minor = minor;
		this.administrator = administrator;
		this.faculty = faculty;
		this.coop = coop;
	}

	public long getPhone() {
		return phone;
	}

	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public String getEmail() {
		return email;
	}
	
	public int getUserId() {
		return userId;
	}

	public long getId() {
		return id;
	}

	public String getAcademicYear() {
		return academicYear;
	}

	public String getMajor() {
		return major;
	}

	public String getMinor() {
		return minor;
	}

	public AdministratorDto getAdministrator() {
		return administrator;
	}

	public Faculty getFaculty() {
		return faculty;
	}

	public ArrayList<Integer> getCoopId() {
		return coop;
	}
}
