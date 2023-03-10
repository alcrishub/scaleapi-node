/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import { Scale } from "@fern-api/scale";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization";
import * as errors from "../../../../../../errors";

export declare namespace ProjectGroups {
    interface Options {
        environment?: environments.ScaleEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class ProjectGroups {
    constructor(private readonly options: ProjectGroups.Options) {}

    /**
     * Returns all labeler groups for the project specified in URL.
     */
    public async list(project: string): Promise<Scale.studio.ProjectGroup> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.ScaleEnvironment.Production,
                `/studio/projects/${project}/groups`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.studio.ProjectGroup.parseOrThrow(
                _response.body as serializers.studio.ProjectGroup.Raw,
                { allowUnknownKeys: true }
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.ScaleError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ScaleError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ScaleTimeoutError();
            case "unknown":
                throw new errors.ScaleError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Creates a group with the provided name for the project specified in the URL and adds team members. Only returns information about that specific group. Team members must be assigned to the specified project to be added to a group in that project.
     */
    public async create(project: string, request: Scale.studio.CreateProjectGroupRequest): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.ScaleEnvironment.Production,
                `/studio/projects/${project}/groups`
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.studio.CreateProjectGroupRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.ScaleError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ScaleError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ScaleTimeoutError();
            case "unknown":
                throw new errors.ScaleError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Adds or removes team members from specified labeler group. Only returns information about that specific group.
     */
    public async update(
        project: string,
        group: string,
        request: Scale.studio.UpdateProjectGroupRequest = {}
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.ScaleEnvironment.Production,
                `/studio/projects/${project}/groups/${group}`
            ),
            method: "PUT",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.studio.UpdateProjectGroupRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.ScaleError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ScaleError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ScaleTimeoutError();
            case "unknown":
                throw new errors.ScaleError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
