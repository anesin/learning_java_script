{
    const USER_EMAIL = Symbol();
    class User {
        setEmail(value) {
            if (!/@/.test(value))
                throw new Error(`invalid email: ${value}`);
            this[USER_EMAIL] = value;
        }
        getEmail() {
            return this[USER_EMAIL];
        }
    }
    
    const u = new User();
    u.setEmail('jhon@doe.com');
    console.log(`User email: ${u.getEmail()}`);    
}

{
    const USER_EMAIL = Symbol();
    class User {
        set email(value) {
            if (!/@/.test(value))
                throw new Error(`invalid email: ${value}`);
            this[USER_EMAIL] = value;
        }
        get email() {
            return this[USER_EMAIL];
        }
    }

    const u = new User();
    u.email = 'jhon@doe.com';
    console.log(`User email: ${u.email}`);
}

{
    class Rectangle {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }
        get perimeter() {
            return this.width*2 + this.height*2;
        }
    }
    const rt = new Rectangle(2, 3);
    console.log(`Rectangle(${rt.width}, ${rt.height}).perimeter = ${rt.perimeter}`);
}