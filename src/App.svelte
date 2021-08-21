<script>
    import Alarm from "./components/Alarm.svelte";
</script>

<body>
    <h1 id="title">Alarms</h1>
    <Alarm/>
</body>

<style lang="scss">
    body {
        min-width: 250px;
        min-height: 400px;

        h1 {
            text-align: center;
            font-family: 'Open Sans', sans-serif;
            font-size: 3em;
        }
    }
</style>