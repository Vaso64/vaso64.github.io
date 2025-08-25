namespace Portfolio.Model;

[Serializable]
public record Project
{
    public string Id { get; init; }
    public string Name { get; init; }
    public string SubName { get; init; }
    public int Year { get; init; }
    public string Description { get; init; }

    public List<Link> Links { get; init; } = [];
    public List<Media> Media { get; init; } = [];
    public List<string> SkillIds { get; init; } = [];


    [System.Text.Json.Serialization.JsonIgnore]
    public List<Skill> Skills { get; set; }
}