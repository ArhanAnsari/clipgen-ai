import SchematicEmbed from "./SchematicEmbed";

async function SchemeticComponent( { componentId }: { componentId: string }) {
    return <SchematicEmbed accessToken={accessToken} componentId={componentId} />


export default SchemeticComponent;