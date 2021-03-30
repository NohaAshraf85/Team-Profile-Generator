const Manager = require("../lib/Manager");

describe("Manager class", () =>{
    describe("Initializtion", () =>{
        it("Should initialize the properties of the class", () =>{
          // Arrange
          const testName = "Noha";
          const testId = "100";
          const testEmail = "noha_ashraf85@hotmail.com";
          const testofficeNumber = "10";
          const testRole = "Manager";


          // Act
          const testManager = new Manager (testName, testId, testEmail, testofficeNumber, testRole);

          // Assert
          expect(testManager.name).toBe(testName)
          expect(testManager.id).toBe(testId)
          expect(testManager.email).toBe(testEmail)
          expect (testManager.officeNumber) .toBe(testofficeNumber)
          
        })
    });

    describe("Get Name", () =>{
        it("Should return the Manager's name", () =>{
            // Arrange
            const testName = "Noha";
            const testId = "100";
            const testEmail = "noha_ashraf85@hotmail.com";
            const testofficeNumber = "10";
            const testRole = "Manager";


            // Act
            const testManager = new Manager (testName, testId, testEmail, testofficeNumber, testRole);

            // Assert
            expect(testManager.getName()).toBe(testName)
        })
    });

    describe("Get ID", () => {
        it("Should return the Manager's id", () =>{
            // Arrange
            const testName = "Noha";
            const testId = "100";
            const testEmail = "noha_ashraf85@hotmail.com";
            const testofficeNumber = "10";
            const testRole = "Manager";

            // Act
            const testManager = new Manager (testName, testId, testEmail, testofficeNumber, testRole);

            // Assert
            expect(testManager.getId()).toBe(testId)

        })
    });

    describe("Get Email", () => {
        it("Should return the Manager's email", () =>{
            const testName = "Noha";
            const testId = "100";
            const testEmail = "noha_ashraf85@hotmail.com";
            const testofficeNumber = "10";
            const testRole = "Manager";
            // Act
            const testManager = new Manager (testName, testId, testEmail, testofficeNumber, testRole);

            // Assert
            expect(testManager.getEmail()).toBe(testEmail)
        })
    });

    describe("Get office Number", () => {
        it("Should return the Manager's email", () =>{
            const testName = "Noha";
            const testId = "100";
            const testEmail = "noha_ashraf85@hotmail.com";
            const testofficeNumber = "10";
            const testRole = "Manager";
            // Act
            const testManager = new Manager (testName, testId, testEmail, testofficeNumber, testRole);

            // Assert
            expect(testManager.getOfficeNumber()).toBe(testofficeNumber)
        })
    });

    describe("Get Role", () => {
        it("Should return the Manager's role", () =>{
            const testName = "Noha";
            const testId = "100";
            const testEmail = "noha_ashraf85@hotmail.com";
            const testofficeNumber = "10";
            const testRole = "Manager";

            // Act
            const testManager = new Manager (testName, testId, testEmail, testofficeNumber, testRole);

            // Assert
            expect(testManager.getRole()).toBe(testRole)
        })
    });
    
});
