/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Scale } from "@fern-api/scale";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<serializers.teammates.list.Response.Raw, Scale.Teammate[]> =
    core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Teammate));

export declare namespace Response {
    type Raw = serializers.Teammate.Raw[];
}
