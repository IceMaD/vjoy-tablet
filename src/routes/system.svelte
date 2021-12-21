<script>
    import {
        FlightSystemsPanel,
        VehiculePanel,
        QuantumPanel,
        ScannerPanel,
        DockingPanel,
        AlimentationPanel,
        Spreaded,
    } from "../components";
</script>

<Spreaded direction="vertical">
    <Spreaded alignment="stretch">
        <VehiculePanel />
        <Spreaded direction="vertical">
            <AlimentationPanel />
            <FlightSystemsPanel />
        </Spreaded>
    </Spreaded>
    <Spreaded alignment="stretch">
        <ScannerPanel />
        <QuantumPanel />
        <DockingPanel grow />
    </Spreaded>
</Spreaded>
