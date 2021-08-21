<form>
    <input type="text" placeholder="Alarm Name" name="title" id="name" />
    <br />
    <input type="time" name="time" id="time" />
    <label for="time">Time</label>
    <div class="weekGrid">
        <div class="dayBox s"><input type="checkbox" name="week" id="s" /></div>
        <div class="dayBox m"><input type="checkbox" name="week" id="m" /></div>
        <div class="dayBox t"><input type="checkbox" name="week" id="t" /></div>
        <div class="dayBox w"><input type="checkbox" name="week" id="w" /></div>
        <div class="dayBox th"><input type="checkbox" name="week" id="th" /></div>
        <div class="dayBox f"><input type="checkbox" name="week" id="f" /></div>
        <div class="dayBox sa"><input type="checkbox" name="week" id="sa" /></div>
        <div class="dayText s"><label for="s">Sunday</label></div>
        <div class="dayText m"><label for="m">Monday</label></div>
        <div class="dayText t"><label for="t">Tuesday</label></div>
        <div class="dayText w"><label for="w">Wednesday</label></div>
        <div class="dayText th"><label for="th">Thrusday</label></div>
        <div class="dayText f"><label for="f">Friday</label></div>
        <div class="dayText sa"><label for="sa">Saturday</label></div>
    </div>
    <button type="submit">Create</button>
</form>

<style lang="scss">
    // TODO get grid to work
    .weekGrid {
        display: grid;

        .dayBox {
            grid-row: "1 / 2";
        }

        .dayText {
            grid-row: "2 / 3";
        }

        .s {
            grid-column: "1 / 2";
        }
        .m {
            grid-column: "2 / 3";
        }
        .t {
            grid-column: "3 / 4";
        }
        .w {
            grid-column: "4 / 5";
        }
        .th {
            grid-column: "5 / 6";
        }
        .f {
            grid-column: "6 / 7";
        }
        .sa {
            grid-column: "7 / 8";
        }
    }
</style>
