<!DOCTYPE html>
<html>
<body>

<h2>Lesson_02</h2>

<p id="demo"></p>

<script>
        'use strict'

        let login = prompt("Who's there?", '');

        if (login == null) {
            alert('Canceled.');
        } else if (login == 'Admin') {
            let password = prompt('Password?', '');

            if (password == null) {
                alert('Canceled.');
            } else if (password == 'TheMaster') {
                alert('Welcome!');
            } else {
                alert('Wrong password');
            }

        } else {
            alert("I don't know you");
        }

</script>

</body>
</html>








<!DOCTYPE html>
<html>
<body>

<h2>Lesson_02</h2>

<p id="demo"></p>

<script>
        'use strict'

        let value = prompt('Введіть число', '');

        if (value > 0) {
            alert(1);
        } else if (value < 0) {
            alert(-1);
        } else {
            alert(0);
        }
</script>

</body>
</html>
