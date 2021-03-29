const Employee = require("../lib/Employee");

describe("Employee class", () =>{
    describe("Initializtion", () =>{
        it("Should return and populate the card int he HTML with the list of Employee name, Employee id, Employee email", () =>{
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
        it("Should return and populate the Employee's name in the right place in the card", () =>{
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
        it("Should return and populate the Employee's ID in the right place in the card", () =>{
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
        it("Should return and populate the Employee's email in the right place in the card", () =>{
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
        it("Should return and populate the Employee's role in the right place in the card", () =>{
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

