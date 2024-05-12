class Company {
    constructor(name, location, about) {
        this.name = name;
        this.location = location;
        this.about = about;
    }

    getCompanyStats() {
        return `
            Company Name: ${this.name}
            About: ${this.about}
            Location: ${this.location}
        `
    }
}

module.exports = Company
