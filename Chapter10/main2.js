$(document).ready(function() {
    'use strict';

    console.log('10.2 위크맵');

    const SecretHolder = (function() {
        const secrets = new WeakMap();
        return class {
            setSecret(secret) { secrets.set(this, secret); }
            getSecret() { return secrets.get(this); }
        }
    })();

    const a = new SecretHolder();
    const b = new SecretHolder();
    a.setSecret('secret A');
    b.setSecret('secret B');
    console.log(a.getSecret());
    console.log(b.getSecret());
})