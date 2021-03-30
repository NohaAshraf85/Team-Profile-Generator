const Engineer = require("../lib/Engineer");

describe("Engineer class", () =>{
    describe("Initializtion", () =>{
        it("Should initialize the properties of the class", () =>{
          // Arrange
          const testName = "Noha";
          const testId = "100";
          const testEmail = "noha_ashraf85@hotmail.com";
          const testGithub = "NohaAshraf85";
          const testRole = "Engineer";


          // Act
          const testEngineer = new Engineer (testName, testId, testEmail, testGithub, testRole);

          // Assert
          expect(testEngineer.name).toBe(testName)
          expect(testEngineer.id).toBe(testId)
          expect(testEngineer.email).toBe(testEmail)
          expect (testEngineer.githubUsername) .toBe(testGithub)
          
        })
    });

    describe("Get Name", () =>{
        it("Should return the Engineer's name", () =>{
            // Arrange
            const testName = "Noha";
            const testId = "100";
            const testEmail = "noha_ashraf85@hotmail.com";
            const testGithub = "NohaAshraf85";
            const testRole = "Engineer";


            // Act
            const testEngineer = new Engineer (testName, testId, testEmail, testGithub, testRole);

            // Assert
            expect(testEngineer.getName()).toBe(testName)
        })
    });

    describe("Get ID", () => {
        it("Should return the Engineer's id", () =>{
            // Arrange
            const testName = "Noha";
            const testId = "100";
            const testEmail = "noha_ashraf85@hotmail.com";
            const testGithub = "NohaAshraf85";
            const testRole = "Engineer";

            // Act
            const testEngineer = new Engineer (testName, testId, testEmail, testGithub, testRole);

            // Assert
            expect(testEngineer.getId()).toBe(testId)

        })
    });

    describe("Get Email", () => {
        it("Should return the Engineer's email", () =>{
            const testName = "Noha";
            const testId = "100";
            const testEmail = "noha_ashraf85@hotmail.com";
            const testGithub = "NohaAshraf85";
            const testRole = "Engineer";

            // Act
            const testEngineer = new Engineer (testName, testId, testEmail, testGithub, testRole);

            // Assert
            expect(testEngineer.getEmail()).toBe(testEmail)
        })
    });

    describe("Get GitHub", () => {
        it("Should return the Engineer's Github", () =>{
            const testName = "Noha";
            const testId = "100";
            const testEmail = "noha_ashraf85@hotmail.com";
            const testGithub = "NohaAshraf85";
            const testRole = "Engineer";

            // Act
            const testEngineer = new Engineer (testName, testId, testEmail, testGithub, testRole);

            // Assert
            expect(testEngineer.getGithub()).toBe(testGithub)
        })
    });

    describe("Get Role", () => {
        it("Should return the Engineer's Role", () =>{
            const testName = "Noha";
            const testId = "100";
            const testEmail = "noha_ashraf85@hotmail.com";
            const testGithub = "NohaAshraf85";
            const testRole = "Engineer";

            // Act
            const testEngineer = new Engineer (testName, testId, testEmail, testGithub, testRole);

            // Assert
            expect(testEngineer.getRole()).toBe(testRole)
        })
    });
    
});