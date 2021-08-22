<div class="form">
    <input type="text" placeholder="Alarm Name" name="title" id="name" />
    <br />
    <input type="time" name="time" id="time" />
    <label for="time">Time</label>
    <select multiple>
        {#each week as day}
            <option value={day}> 
                {day}
            </option>
        {/each}
    </select>
    <button type="submit">Create</button>
</div>

<script>
    

    const week = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday"
    ];

    function submit() {
        // validate data first
        
    }
</script>

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
    }
</style>
