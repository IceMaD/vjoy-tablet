<script>
    import {
        PipPanel,
        PinsPanel,
        MissilesPanel,
        CounterMeasuresPanel,
        ShieldsPanel,
        TurretPanel,
        DangerZonePanel,
        PowerTrianglePanel,
        Spreaded,
        Filler,
    } from "../components";
</script>

<Spreaded direction="vertical">
    <Spreaded alignment="start">
        <Spreaded direction="vertical">
            <Spreaded alignment="stretch">
                <PowerTrianglePanel />
                <ShieldsPanel />
            </Spreaded>
            <Spreaded alignment="stretch">
                <PinsPanel />
                <Spreaded direction="vertical">
                    <PipPanel />
                    <TurretPanel />
                </Spreaded>
            </Spreaded>
        </Spreaded>

        <Spreaded direction="vertical">
            <MissilesPanel />
            <CounterMeasuresPanel />
        </Spreaded>
    </Spreaded>
    <DangerZonePanel />
</Spreaded>
