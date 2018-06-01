describe("App", () => {
  describe("Counter", () => {
    it("is set to 120 when the button is clicked", () => {
    	button.click()
    	expect(factorial(5)).toBe(120);
    })
  })

  describe("Button", () => {
    it("has an ID of 'click-me'", () => {

    	expect(button.id).toBe('click-me')
    })
  })

  describe("Factorial", () => {
    it("returns the factorial of positive numbers", () => {
    	expect(factorial(10)).toBe(3628800)
    })

    it("returns 1 if the provided number is less than 1 ", () => {
    	expect(factorial(0.9)).toBe(1)
    })
  })

  describe("Computer", () => {
    it("is created with a hard drive size of 512", () => {
    	computer = new Computer

    	expect(computer.hardDriveSpace).toBe(512)
    })

    describe("installProgram", () => {
    	beforeEach(function(done){
      		computer.installProgram(412,function(){
      			done();
      	})
      })
      computer = new Computer
      it("can install a program if there is sufficient space", () => {
      	expect(computer.hardDriveSpace).toBe(100)
      })

      	beforeEach(function(done){
      		computer.installProgram(612,function(){
      			done();
      	})
      })
      it("will not install the program if there is insufficient space", () => {
      	expect(computer.hardDriveSpace).toBe(100)
      })
    })

    describe("format", () => {
    	computer = new Computer
    	computer.format()
      it("resets the hard drive to 512, even after programs have been installed", () => {
      	expect(computer.hardDriveSpace).toBe(512)
      });
    })

  })

})