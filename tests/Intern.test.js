const Intern = require("../lib/Intern");

describe("Intern class", () =>{
    describe("Initializtion", () =>{
        it("Initialize all the properties of the class successfully", () =>{
          // Arrange
          const testName = "Noha";
          const testId = "100";
          const testEmail = "noha_ashraf85@hotmail.com";
          const testSchool = "UCONN";
          const testRole = "Intern";


          // Act
          const testIntern = new Intern (testName, testId, testEmail, testSchool, testRole);

          // Assert
          expect(testIntern.name).toBe(testName)
          expect(testIntern.id).toBe(testId)
          expect(testIntern.email).toBe(testEmail)
          expect(testIntern.school) .toBe(testSchool)
          
        })
    });

    describe("Get Name", () =>{
        it("Should return the intern's name", () =>{
            // Arrange
            const testName = "Noha";
            const testId = "100";
            const testEmail = "noha_ashraf85@hotmail.com";
            const testSchool = "UCONN";
            const testRole = "Intern";


            // Act
            const testIntern = new Intern (testName, testId, testEmail, testSchool, testRole);

            // Assert
            expect(testIntern.getName()).toBe(testName)
        })
    });

    describe("Get ID", () => {
        it("Should return the intern's id", () =>{
            // Arrange
            const testName = "Noha";
            const testId = "100";
            const testEmail = "noha_ashraf85@hotmail.com";
            const testSchool = "UCONN";
            const testRole = "Intern";

            // Act
            const testIntern = new Intern (testName, testId, testEmail, testSchool, testRole);

            // Assert
            expect(testIntern.getId()).toBe(testId)

        })
    });

    describe("Get Email", () => {
        it("Should return the intern's email", () =>{
            const testName = "Noha";
          const testId = "100";
          const testEmail = "noha_ashraf85@hotmail.com";
          const testSchool = "UCONN";
          const testRole = "Intern";

            // Act
            const testIntern = new Intern (testName, testId, testEmail, testSchool, testRole);

            // Assert
            expect(testIntern.getEmail()).toBe(testEmail)
        })
    });

    describe("Get School", () => {
        it("Should return the intern's school", () =>{
            const testName = "Noha";
            const testId = "100";
            const testEmail = "noha_ashraf85@hotmail.com";
            const testSchool = "UCONN";
            const testRole = "Intern";

            // Act
            const testIntern = new Intern (testName, testId, testEmail, testSchool, testRole);

            // Assert
            expect(testIntern.getSchool()).toBe(testSchool)
        })
    });

    describe("Get Role", () => {
        it("Should return the intern's Role", () =>{
            const testName = "Noha";
            const testId = "100";
            const testEmail = "noha_ashraf85@hotmail.com";
            const testSchool = "UCONN";
            const testRole = "Intern";

            // Act
            const testIntern = new Intern (testName, testId, testEmail, testSchool, testRole);

            // Assert
            expect(testIntern.getRole()).toBe(testRole)
        })
    });
    
});

