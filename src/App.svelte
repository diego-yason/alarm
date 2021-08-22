<script>
    import AlarmList from "./components/AlarmList.svelte";
    import NewAlarm from "./components/NewAlarm.svelte";
</script>

<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"rel="stylesheet"/>

<body>
    <h1 id="title">Alarms</h1>
    <AlarmList />
    <h1 class="title">New Alarms</h1>
    <NewAlarm />
</body>

<style lang="scss">
    body {
        width: 300px;
        height: 400px;

        h1 {
            text-align: center;
            font-family: "Open Sans", sans-serif;
            font-size: 3em;
        }
    }
</style>
