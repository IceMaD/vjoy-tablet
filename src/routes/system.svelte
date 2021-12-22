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

<Spreaded alignment="stretch">
    <Spreaded direction="vertical">
        <AlimentationPanel />
        <FlightSystemsPanel />
        <Spreaded alignment="stretch">
            <ScannerPanel />
            <DockingPanel grow />
        </Spreaded>
    </Spreaded>
    <Spreaded direction="vertical" alignment="stretch">
        <VehiculePanel grow />
        <QuantumPanel />
    </Spreaded>
</Spreaded>
