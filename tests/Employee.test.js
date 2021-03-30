const Employee = require("../lib/Employee");

describe("Employee class", () =>{
    describe("Initializtion", () =>{
        it("Should initialize the properties of the class", () =>{
          // Arrange
          const testName = "Noha";
          const testId = "100";
          const testEmail = "noha_ashraf85@hotmail.com";
          const testRole = "Employee";


          // Act
          const testEmployee = new Employee(testName, testId, testEmail, testRole);

          // Assert
          expect(testEmployee.name).toBe(testName)
          expect(testEmployee.id).toBe(testId)
          expect(testEmployee.email).toBe(testEmail)
          
        })
    });

    describe("Get Name", () =>{
        it("Should return the Employee's name", () =>{
            // Arrange
            const testName = "Noha";
            const testId = "100";
            const testEmail = "noha_ashraf85@hotmail.com";
            const testRole = "Employee";


            // Act
            const testEmployee = new Employee(testName, testId, testEmail, testRole);

            // Assert
            expect(testEmployee.getName()).toBe(testName)
        })
    });

    describe("Get ID", () => {
        it("Should return the Employee's id", () =>{
            // Arrange
            const testName = "Noha";
            const testId = "100";
            const testEmail = "noha_ashraf85@hotmail.com";
            const testRole = "Employee";

            // Act
            const testEmployee = new Employee(testName, testId, testEmail, testRole);

            // Assert
            expect(testEmployee.getId()).toBe(testId)

        })
    });

    describe("Get Email", () => {
        it("Should return the Employee's email", () =>{
            const testName = "Noha";
            const testId = "100";
            const testEmail = "noha_ashraf85@hotmail.com";
            const testRole = "Employee";

            // Act
            const testEmployee = new Employee(testName, testId, testEmail, testRole);

            // Assert
            expect(testEmployee.getEmail()).toBe(testEmail)
        })
    });

    describe("Get Role", () => {
        it("Should return the Employee's Role", () =>{
            const testName = "Noha";
            const testId = "100";
            const testEmail = "noha_ashraf85@hotmail.com";
            const testRole = "Employee";

            // Act
            const testEmployee = new Employee(testName, testId, testEmail, testRole);

            // Assert
            expect(testEmployee.getRole()).toBe(testRole)
        })
    });
    
});

