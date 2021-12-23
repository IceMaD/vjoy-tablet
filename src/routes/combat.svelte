<script>
    import {
        MissilesPanel,
        CounterMeasuresPanel,
        ShieldsPanel,
        TurretPanel,
        TargettingPanel,
        PowerTrianglePanel,
        Spreaded,
    } from "../components";
</script>

<Spreaded alignment="stretch">
    <Spreaded direction="vertical">
        <PowerTrianglePanel />
        <TargettingPanel />
    </Spreaded>
    <Spreaded direction="vertical">
        <ShieldsPanel grow />
        <CounterMeasuresPanel />
    </Spreaded>
    <Spreaded direction="vertical">
        <MissilesPanel />
        <TurretPanel grow />
    </Spreaded>
</Spreaded>
